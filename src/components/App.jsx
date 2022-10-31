import React from 'react';
import Card from './Card';

export default function App({ hello, arr }) {
  return (
    <div className="container">
      <form method="POST" action="/new">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Send your text
            <input name="mess" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div>
        {hello}
      </div>
      <div>
        {arr.map((el) => <Card data={el} />)}
      </div>

    </div>
  );
}
