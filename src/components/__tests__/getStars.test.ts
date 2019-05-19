import { getStars } from "../Character";

it("should return 7 grey stars when no stars input", () => {
  const stars = getStars("0", "0");

  expect(stars).toStrictEqual({
    redStar: 0,
    greyStar: 7,
    yellowStar: 0,
    emptyRStar: 0
  });
});

it("should return correct stars input (1 red, 1 yellow)", () => {
  const stars = getStars("1", "1");

  expect(stars).toStrictEqual({
    redStar: 1,
    greyStar: 6,
    yellowStar: 0,
    emptyRStar: 0
  });
});

it("should return correct stars input (0 red, 1 yellow)", () => {
  const stars = getStars("0", "1");

  expect(stars).toStrictEqual({
    redStar: 0,
    greyStar: 6,
    yellowStar: 1,
    emptyRStar: 0
  });
});

it("should return correct stars input (2 red, 7 yellow)", () => {
  const stars = getStars("2", "7");

  expect(stars).toStrictEqual({
    redStar: 2,
    greyStar: 0,
    yellowStar: 5,
    emptyRStar: 0
  });
});

it("should return correct stars input (3 red, 2 yellow)", () => {
  const stars = getStars("3", "2");

  expect(stars).toStrictEqual({
    redStar: 2,
    greyStar: 4,
    yellowStar: 0,
    emptyRStar: 1
  });
});
