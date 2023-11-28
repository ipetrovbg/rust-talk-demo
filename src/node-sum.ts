enum StatusCode {
  OK = 200,
}

type ResponsePayload = {
  sum: number;
  message: string;
};

class Response {
  statusCode: StatusCode;
  body: string;

  constructor(response: ResponsePayload, statusCode: StatusCode) {
    this.statusCode = statusCode;
    this.body = JSON.stringify(response);
  }
}

const functionHandler = async (): Promise<Response> => {
  let sum = 0;
  for (let i = 0; i < 100_000_000; i++) {
    sum += i;
  }

  let responsePayload: ResponsePayload = {
    message: "The sum of 0..100,000,000",
    sum,
  };
  let response = new Response(responsePayload, StatusCode.OK);

  return response;
};

export async function main() {
  return await functionHandler();
}
