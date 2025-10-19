# HNG Stage 0 - NestJS API with Cat Facts

A NestJS-based REST API that provides user information along with dynamic cat facts from an external API.

## 🔗 GitHub Repository

**Repository URL**: [https://github.com/Dev-Faith/HNG-Stage0](https://github.com/Dev-Faith/HNG-Stage0)

## 📋 Description

This project is a NestJS application that exposes a `/me` endpoint which returns user information along with a random cat fact fetched from the Cat Facts API. The endpoint demonstrates integration with external APIs, proper error handling, and follows REST API best practices.

## ✨ Features

- **GET /me** endpoint that returns:
  - User information (email, name, stack)
  - Current UTC timestamp in ISO 8601 format
  - Random cat fact from Cat Facts API
- Dynamic timestamp generation for each request
- Graceful error handling for external API failures
- Proper HTTP headers and status codes
- Fallback mechanism when Cat Facts API is unavailable

## 🛠️ Technology Stack

- **Framework**: NestJS 11.x
- **Runtime**: Node.js
- **Language**: TypeScript 5.x
- **HTTP Client**: Axios
- **Package Manager**: npm

## 📦 Dependencies

### Production Dependencies
- `@nestjs/common` - Core NestJS functionality
- `@nestjs/core` - NestJS core module
- `@nestjs/platform-express` - Express platform adapter
- `@nestjs/axios` - Axios integration for HTTP requests
- `axios` - Promise-based HTTP client
- `reflect-metadata` - Metadata reflection API
- `rxjs` - Reactive extensions library

### Development Dependencies
- `@nestjs/cli` - NestJS CLI tools
- `@nestjs/testing` - Testing utilities
- `typescript` - TypeScript compiler
- `ts-node` - TypeScript execution engine
- `jest` - Testing framework
- `eslint` - Linting utility
- `prettier` - Code formatter

For a complete list of dependencies with versions, see [package.json](./package.json).

## 🚀 Installation & Setup

### Prerequisites

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher

You can check your versions with:
```bash
node --version
npm --version
```

### Step 1: Clone the Repository

```bash
git clone https://github.com/Dev-Faith/HNG-Stage0.git
cd HNG-Stage0
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

## 🔧 Environment Variables

This project currently does not require any environment variables for basic operation. However, you can optionally configure:

### Optional Configuration

Create a `.env` file in the root directory (optional):

```env
# Server Configuration
PORT=3000

# API Configuration (optional - defaults are set in code)
CAT_FACTS_API_URL=https://catfact.ninja/fact
API_TIMEOUT=5000
```

**Note**: If no `.env` file is provided, the application will use the following defaults:
- Port: `3000`
- Cat Facts API URL: `https://catfact.ninja/fact`
- API Timeout: `5000ms`

## 🏃 Running the Application

### Development Mode (with auto-reload)

```bash
npm run start:dev
```

The server will start on `http://localhost:3000` with hot-reloading enabled.

### Production Mode

```bash
# Build the application
npm run build

# Start in production mode
npm run start:prod
```

### Standard Mode

```bash
npm run start
```

## 📡 API Endpoints

### GET /me

Returns user information along with a random cat fact.

**Request:**
```bash
curl http://localhost:3000/me
```

**Response:**
```json
{
  "status": "success",
  "user": {
    "email": "your-email@example.com",
    "name": "Your Full Name",
    "stack": "NestJS/Node.js"
  },
  "timestamp": "2025-10-18T23:25:30.123Z",
  "fact": "Cats are believed to be the only mammals who don't taste sweetness."
}
```

**Response Headers:**
- `Content-Type: application/json`

**Status Codes:**
- `200 OK` - Success

## 🧪 Testing

### Run Unit Tests

```bash
npm run test
```

### Run End-to-End Tests

```bash
npm run test:e2e
```

### Test Coverage

```bash
npm run test:cov
```

### Manual Testing

Test the endpoint using curl:

```bash
# Basic request
curl http://localhost:3000/me

# With headers
curl -i http://localhost:3000/me

# Pretty print JSON
curl http://localhost:3000/me | json_pp
```

Or use tools like:
- **Postman**: Import the endpoint and test
- **Insomnia**: Create a GET request to `http://localhost:3000/me`
- **Browser**: Navigate to `http://localhost:3000/me`

## 📁 Project Structure

```
├── src/
│   ├── main.ts                 # Application entry point
│   ├── app.module.ts           # Root module
│   ├── app.controller.ts       # Root controller
│   ├── app.service.ts          # Root service
│   └── me/
│       ├── me.module.ts        # Me module
│       ├── me.controller.ts    # Me controller (handles /me endpoint)
│       ├── me.service.ts       # Me service (business logic)
│       └── dto/
│           └── me-response.dto.ts  # Response data transfer object
├── test/                       # E2E tests
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── nest-cli.json              # NestJS CLI configuration
└── README.md                  # This file
```

## 🔍 How It Works

1. **Request Handling**: When a GET request is made to `/me`, the `MeController` receives it
2. **Service Layer**: The controller delegates to `MeService` which:
   - Generates the current UTC timestamp
   - Makes an HTTP request to Cat Facts API
   - Constructs the response object
3. **Error Handling**: If the Cat Facts API fails, a fallback message is used
4. **Response**: The formatted JSON response is returned with appropriate headers

## 🛡️ Error Handling

The application includes robust error handling:

- **External API Failures**: If Cat Facts API is down, returns a fallback message
- **Network Timeouts**: 5-second timeout prevents hanging requests
- **Logging**: All errors are logged for debugging purposes

## 🔒 Best Practices Implemented

- ✅ Modular architecture with separate modules, controllers, and services
- ✅ TypeScript for type safety
- ✅ DTO (Data Transfer Objects) for response structure
- ✅ Dependency injection
- ✅ Proper error handling and logging
- ✅ Timeout configuration for external API calls
- ✅ Fallback mechanisms for resilience
- ✅ ISO 8601 timestamp format
- ✅ RESTful API design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the UNLICENSED license.

## 👤 Author

Your Name - [GitHub Profile](https://github.com/Dev-Faith)

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) - The progressive Node.js framework
- [Cat Facts API](https://catfact.ninja/) - For providing random cat facts
- HNG Internship Program

## 📞 Support

For issues, questions, or contributions, please:
- Open an issue on [GitHub](https://github.com/Dev-Faith/HNG-Stage0/issues)
- Contact the maintainer

---

**Built with ❤️ using NestJS**
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
