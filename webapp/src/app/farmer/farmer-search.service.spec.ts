import { TestBed, async } from "@angular/core/testing";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { of } from 'rxjs';

import { environment } from "../../environments/environment";
import { FarmerSearchService } from "./farmer-search.service";

describe("FarmerSearchService", () => {
  let service: FarmerSearchService;
  let httpClient: HttpClient;
  let getReqSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FarmerSearchService],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(FarmerSearchService);
    httpClient = TestBed.get(HttpClient);

    getReqSpy = spyOn(httpClient, "get").and.returnValue(of([]));
  });

  describe("#searchFarmers", () => {
    beforeEach(() => {
      getReqSpy.calls.reset();
    });

    it("should request server", () => {
      service.searchFarmers({ key: "A" });

      expect(httpClient.get).toHaveBeenCalledWith(
        environment.searchEndpointURL + "A"
      );
    });

    it("should not request server when key is empty", () => {
      service.searchFarmers({ key: null });

      expect(httpClient.get).not.toHaveBeenCalled();
    });
  });
});
