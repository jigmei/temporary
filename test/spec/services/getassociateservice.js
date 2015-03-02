'use strict';

describe('Service: GetAssociateService', function () {

  // load the service's module
  beforeEach(module('recognitionApp'));

  // instantiate service
  var GetAssociateService;
  beforeEach(inject(function (_GetAssociateService_) {
    GetAssociateService = _GetAssociateService_;
  }));

  it('should do something', function () {
    expect(!!GetAssociateService).toBe(true);
  });

});
