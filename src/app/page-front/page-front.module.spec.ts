import { PageFrontModule } from './page-front.module';

describe('PageFrontModule', () => {
  let pageFrontModule: PageFrontModule;

  beforeEach(() => {
    pageFrontModule = new PageFrontModule();
  });

  it('should create an instance', () => {
    expect(pageFrontModule).toBeTruthy();
  });
});
