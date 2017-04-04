import * as React from "react";
import {expect} from "chai";

describe('basic test', () => {
  it('should be ok', () => {
    expect(false).to.not.equal.true;
  });

  it('should be an error', () => {
    expect(new Error).to.be.an('error');
  });
});