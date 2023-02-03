import {
  getBg,
  getBorder,
  getCursor,
  getHover,
  getTextColor,
  getWidth,
} from "./Button.helpers";
import { ButtonColorType } from "@/common/types";

describe("Buttons", () => {
  describe("Style Helpers", () => {
    it("should return primary background", () => {
      const color: ButtonColorType = "primary";

      expect(getBg(color, false, false)).toBe("bg-primary-700");
    });

    it("should return outlined background", () => {
      const color: ButtonColorType = "primary";

      expect(getBg(color, true, false)).toBe("bg-transparent");
    });

    it("should return disabled background", () => {
      const color: ButtonColorType = "primary";

      expect(getBg(color, false, true)).toBe("bg-gray-200");
    });

    it("should return secondary background", () => {
      const color: ButtonColorType = "secondary";

      expect(getBg(color, false, false)).toBe("bg-secondary-600");
    });

    it("should return tertiary background", () => {
      const color: ButtonColorType = "tertiary";

      expect(getBg(color, false, false)).toBe("bg-white");
    });

    it("should return white textColor if not outlined", () => {
      const color: ButtonColorType = "primary";

      expect(getTextColor(color, false, false)).toBe("text-white");
    });

    it("should return primary textColor if outlined", () => {
      const color: ButtonColorType = "primary";

      expect(getTextColor(color, true, false)).toBe("text-primary-700");
    });

    it("should return secondary textColor if outlined", () => {
      const color: ButtonColorType = "secondary";

      expect(getTextColor(color, true, false)).toBe("text-secondary-600");
    });

    it("should return tertiary textColor if without taking outlined into consideration", () => {
      const color: ButtonColorType = "tertiary";

      expect(getTextColor(color, true, false)).toBe("text-primary-700");
      expect(getTextColor(color, false, false)).toBe("text-primary-700");
    });

    it("should not contain hover if disabled", () => {
      const color: ButtonColorType = "primary";
      expect(getHover(color, false, true)).toBe("");
    });

    it("should return outlined primary hover", () => {
      const color: ButtonColorType = "primary";
      expect(getHover(color, true, false)).toBe(
        "hover:border-primary-500 hover:text-primary-500"
      );
    });

    it("should return outlined secondary hover", () => {
      const color: ButtonColorType = "secondary";
      expect(getHover(color, true, false)).toBe(
        "hover:border-secondary-500 hover:text-secondary-500"
      );
    });

    it("should return outlined tertiary hover", () => {
      const color: ButtonColorType = "tertiary";
      expect(getHover(color, true, false)).toBe(
        "hover:border-tertiary-500 hover:text-tertiary-500"
      );
    });

    it("should return primary hover", () => {
      const color: ButtonColorType = "primary";
      expect(getHover(color, false, false)).toBe("hover:bg-primary-600");
    });

    it("should return secondary hover", () => {
      const color: ButtonColorType = "secondary";
      expect(getHover(color, false, false)).toBe("hover:bg-secondary-500");
    });

    it("should return tertiary hover", () => {
      const color: ButtonColorType = "tertiary";
      expect(getHover(color, false, false)).toBe("hover:bg-gray-50");
    });

    it("should return disabled border", () => {
      const color: ButtonColorType = "primary";
      expect(getBorder(color, true)).toBe("border border-gray-500");
    });

    it("should return primary border if not disabled", () => {
      const color: ButtonColorType = "primary";
      expect(getBorder(color, false)).toBe("border border-primary-700");
    });
    it("should return secondary border if not disabled", () => {
      const color: ButtonColorType = "secondary";
      expect(getBorder(color, false)).toBe("border border-secondary-600");
    });
    it("should return tertiary border if not disabled", () => {
      const color: ButtonColorType = "tertiary";
      expect(getBorder(color, false)).toBe("border border-tertiary-700");
    });

    it("should return disabled cursor", () => {
      expect(getCursor(true)).toBe("cursor-not-allowed");
    });

    it("should return disabled cursor", () => {
      expect(getCursor(false)).toBe("cursor-pointer");
    });

    it("should return full width", () => {
      expect(getWidth(true)).toBe("w-full");
    });
    it("should return default empty width if not full", () => {
      expect(getWidth(false)).toBe("");
    });
  });
});
