import { renderHook } from "@testing-library/react";
import { useDeviceType } from "@/hooks/use-device-type";
import { useWindowSize } from "usehooks-ts";

jest.mock("usehooks-ts", () => ({
  useWindowSize: jest.fn(),
}));

describe("useDeviceType", () => {
  it("should return \"mobile\" when width is less than 840", () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 800, height: 600 });
    const { result } = renderHook(() => useDeviceType());
    expect(result.current).toBe("mobile");
  });

  it("should return \"tablet\" when width is between 840 and 1024", () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 900, height: 600 });
    const { result } = renderHook(() => useDeviceType());
    expect(result.current).toBe("tablet");
  });

  it("should return \"laptop\" when width is between 1024 and 1280", () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 1100, height: 600 });
    const { result } = renderHook(() => useDeviceType());
    expect(result.current).toBe("laptop");
  });

  it("should return \"desktop\" when width is 1280 or greater", () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 1300, height: 600 });
    const { result } = renderHook(() => useDeviceType());
    expect(result.current).toBe("desktop");
  });

  it("should return undefined when no screen size is provided", () => {
    (useWindowSize as jest.Mock).mockReturnValue(undefined);
    const { result } = renderHook(() => useDeviceType());
    expect(result.current).toBeUndefined();
  });
});
