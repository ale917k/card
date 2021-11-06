import { mediaUp, mediaDown, mediaBetween } from "./theme";

describe("utils/theme mediaUp", () => {
  it("Returns valid query", () => {
    const minResolution = 500;
    const mediaQuery = mediaUp(minResolution);

    expect(mediaQuery).toStrictEqual(mediaQuery);
  });

  it("Works with 0 and negative inputs", () => {
    let minResolution = 0;
    let mediaQuery = mediaUp(minResolution);

    expect(mediaQuery).toStrictEqual(`@media only screen and (min-width: ${minResolution}px)`);

    minResolution = -500;
    mediaQuery = mediaUp(minResolution);

    expect(mediaQuery).toStrictEqual(`@media only screen and (min-width: ${minResolution}px)`);
  });
});

describe("utils/theme mediaDown", () => {
  it("Returns valid query", () => {
    const maxResolution = 500;
    const mediaQuery = mediaDown(maxResolution);

    expect(mediaQuery).toStrictEqual(`@media only screen and (max-width: ${maxResolution}px)`);
  });

  it("Works with 0 and negative inputs", () => {
    let maxResolution = 0;
    let mediaQuery = mediaDown(maxResolution);

    expect(mediaQuery).toStrictEqual(`@media only screen and (max-width: ${maxResolution}px)`);

    maxResolution = -500;
    mediaQuery = mediaDown(maxResolution);

    expect(mediaQuery).toStrictEqual(`@media only screen and (max-width: ${maxResolution}px)`);
  });
});

describe("utils/theme mediaBetween", () => {
  it("Returns valid query", () => {
    const minResolution = 500;
    const maxResolution = 1000;
    const mediaQuery = mediaBetween(minResolution, maxResolution);

    expect(mediaQuery).toStrictEqual(
      `@media only screen and (min-width: ${minResolution}px) and (max-width: ${maxResolution}px)`
    );
  });

  it("Works with 0 and negative inputs", () => {
    let minResolution = 0;
    let maxResolution = 0;
    let mediaQuery = mediaBetween(minResolution, maxResolution);

    expect(mediaQuery).toStrictEqual(
      `@media only screen and (min-width: ${minResolution}px) and (max-width: ${maxResolution}px)`
    );

    minResolution = -1000;
    maxResolution = -500;
    mediaQuery = mediaBetween(minResolution, maxResolution);

    expect(mediaQuery).toStrictEqual(
      `@media only screen and (min-width: ${minResolution}px) and (max-width: ${maxResolution}px)`
    );
  });
});
