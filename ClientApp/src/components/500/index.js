import React from 'react';
import Button from '@material-ui/core/Button';
const Error500 = () => (
  <div className="err-container text-center">
    <div className="err">
      <h1>500</h1>
      <h2>Sorry, server goes wrong</h2>
    </div>

    <div className="err-body">
      <Button title="Go Back to Home Page" className="btn btn-raised btn-lg btn-default">
        Go Back to Home Page
      </Button>
    </div>
  </div>
);

const Page = () => (
  <div className="page-err">
    <div key="1">
      <Error500 />
    </div>
  </div>
);

export default Page;
