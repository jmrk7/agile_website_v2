"use strict";

import request from "request"
import { sendSlackMessage } from "../services/slackService"

function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1).toLowerCase();
}

async function createLead(req, res, next) {
  const fields = req.body;

  let lead = {
    email: fields.r_email,
    first_name: fields.r_fname,
    last_name: fields.r_lname,
    job_title: fields.r_jobtitle,
    work_number: fields.r_phonenumber,
    country: fields.r_country,
    company: {
      name: fields.r_company,
    },
    custom_field: {
      cf_lead_source: "Website",
      cf_products: fields.r_product,
    },
  };

  await createNewLead(lead, res);
}

async function createNewLead(lead, response) {
  try {
    let json = {
      lead: lead,
    };

    let options = {
      url: process.env.FRESHSALES_API_URL,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token=${process.env.FRESHSALES_API_KEY}`,
      },
      json: json,
    };

    request(options, function (err, res, body) {
      if (res && (res.statusCode === 200 || res.statusCode === 201)) {
        sendSlackMessage(
          `${capitalize(lead.custom_field.cf_products)} Signup: <${
            process.env.FRESHSALES_API_URL
          }${res.body.lead.id}|${res.body.lead.company.name} - ${
            res.body.lead.display_name
          }> :slightly_smiling_face:`
        );
        response.status(200).send(res.body)
      }
      else {
        response.status(400).send(err)
      }
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createLead,
};
