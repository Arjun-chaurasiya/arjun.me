# arjun.me — Postman-Themed Portfolio

> A developer portfolio styled as a Postman API client — built by **Arjun Chaurasiya**, Senior QA Engineer with 6+ years of experience.

---

## Live Site

[arjun.me](https://arjun.me) · Branch: `postman-ui`

---

## About

This portfolio simulates the Postman API interface. Visitors interact with it like an API:

- Hit **SEND** on `GET /api/qa-engineer/arjun-chaurasiya` to load the profile response
- After the response loads, all other endpoints unlock — `/about`, `/skills`, `/experience`, `/contact`
- The contact section uses `POST /api/qa-engineer/arjun-chaurasiya/contact` backed by Netlify Forms

---

## API Endpoints (Sections)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/qa-engineer/arjun-chaurasiya` | Overview — profile JSON response |
| `GET` | `/api/qa-engineer/arjun-chaurasiya/about` | Bio, contact info, key-value details |
| `GET` | `/api/qa-engineer/arjun-chaurasiya/skills` | Skills grouped by category |
| `GET` | `/api/qa-engineer/arjun-chaurasiya/experience` | Work history & education timeline |
| `POST` | `/api/qa-engineer/arjun-chaurasiya/contact` | Send a hire/contact request |

---

## Profile Response

```json
{
  "name": "Arjun Chaurasiya",
  "role": "QA Engineer II",
  "experience": 6,
  "domain": [
    "Supply Chain",
    "Healthcare",
    "GPS"
  ],
  "automation": [
    "Selenium",
    "REST Assured",
    "Playwright"
  ],
  "available": true,
  "location": "Bangalore, India"
}
```

---

## Experience

### QA Engineer II — Logward Systems Private Limited
`May 2023 — Present` · Bangalore, India · Supply Chain

- End-to-end testing for Supply Chain platform across sprint cycles
- Built and maintained REST Assured automation framework integrated with Jenkins CI/CD
- Release Owner — validated releases and provided final sign-off
- Debugged production exceptions via Grafana, Kibana, and Jaeger
- Validated Kubernetes deployments on Rancher; verified AWS (Cognito, S3, SQS, IAM)

**Tools:** REST Assured · Jira · Jenkins · Kubernetes · AWS · Grafana · Kibana · MongoDB · MySQL

---

### QA Engineer — DocEngage Informatics Pvt Ltd
`Jan 2022 — May 2023` · India · Healthcare

- Authored FRDs, RTM, release notes; planned and executed full test strategies
- Performed smoke, functional, integration, regression, and mobile app testing
- API testing with Postman; defect reporting and verification in Jira

**Tools:** Postman · Jira · EHR · HCRM · Mobile Testing

---

### Test Engineer — TrackNerd GPS Pvt Ltd
`Feb 2020 — Jan 2022` · India · GPS Tracking

- Designed test plans and cases for CRM web applications
- End-to-end API testing; client onboarding and technical support

**Tools:** API Testing · CRM · Test Plans · Client Onboarding

---

### B.Tech — Computer Science & Engineering
`2016 — 2020` · Delhi Institute of Engineering & Technology (DIET), Meerut

- First Class with Distinction
- Specializations: Core Java · Cyber Security & Ethical Hacking

---

## Skills

| Category | Skills |
|----------|--------|
| **Testing Types** | Functional, Regression, Integration, Smoke & Sanity, API Testing, Manual Testing, Performance (JMeter) |
| **Automation & Frameworks** | Selenium (Java), Playwright (JS), TestNG, REST Assured, Postman |
| **Tools & Platforms** | Jira, Jenkins, Git, Kubernetes, Rancher, Grafana, Kibana, Jaeger, FullStory |
| **Cloud & Messaging** | AWS Cognito, AWS S3, AWS SQS, AWS IAM, Kafka, RabbitMQ |
| **Databases** | MongoDB, MySQL |
| **Methodologies** | Agile (Scrum), STLC, SDLC, Sprint Planning, Release Validation, Change Impact Analysis |

---

## Tech Stack (Site)

- Pure HTML · CSS · Vanilla JavaScript
- Netlify Forms (contact form)
- Netlify hosting with `netlify-plugin-no-more-404` and `@netlify/plugin-sitemap`
- Font Awesome icons · Typed.js

---

## Contact

| | |
|-|-|
| **Email** | arjunkmr1997@gmail.com |
| **Phone** | +91 790 697 3405 |
| **LinkedIn** | [arjunchaurasiya](https://www.linkedin.com/in/arjunchaurasiya/) |
| **Location** | Bangalore, India |
| **CV** | [Download PDF](cv/Arjun_Chaurasiya_Senior_SQA_Engineer.pdf) |
