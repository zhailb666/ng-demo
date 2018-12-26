import { PageFrontRoutingModule } from './page-front-routing.module';

describe('PageFrontRoutingModule', () => {
  let pageFrontRoutingModule: PageFrontRoutingModule;

  beforeEach(() => {
    pageFrontRoutingModule = new PageFrontRoutingModule();
  });

  it('should create an instance', () => {
    expect(pageFrontRoutingModule).toBeTruthy();
  });
});
