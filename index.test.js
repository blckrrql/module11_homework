import { isEven } from "./index.js"

describe("Tests for isEven function", () => {

  it("Should opperate correctly with even, odd and invalid numbers", () => {
    expect(isEven(2568)).toBe('Число 2568 - чётное');
    expect(isEven(345677)).toBe('Число 345677 - нечётное');
    expect(isEven("hello")).toBe('Данные неверны')
  });
});