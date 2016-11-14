'use strict';

var apiPort = process.env.API_PORT;
var apiURL = 'http://localhost:' + apiPort + '/';

var superagent = require('superagent');
var chai = require('chai');
var expect = chai.expect;
var should = require('should');

describe('Core Test Suite',
  function () {
    it('Testing Index call to ' + apiURL,
      function (done) {
        superagent.get(apiURL).end(
          function (err, res) {
            (err === null).should.equal(true);
            res.statusCode.should.equal(200);
            done();
          }
        );
      }
    );
    it('Testing Info call to ' + apiURL,
      function (done) {
        superagent.get(apiURL + 'info').end(
          function (err, res) {
            (err === null).should.equal(true);
            res.statusCode.should.equal(200);
            res.body.should.have.property('time');
            done();
          }
        );
      }
    );
  }
);
