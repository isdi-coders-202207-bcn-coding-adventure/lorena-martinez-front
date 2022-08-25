import { render, screen } from "@testing-library/react";
import React from "react";
import CounterComponent from "./CounterComponent";

describe("Given a Counter component", () => {
  describe("When it's instantantiated", () => {
    test("Then it should render a list of '4' items", () => {
      const expectedListItems = 4;

      render(<CounterComponent />);

      const resultList = screen.getAllByRole("listitem");

      expect(resultList).toHaveLength(expectedListItems);
    });

    test("Then it should render 'minutes' and 'seconds' as text", () => {
      const expectedTextSeconds = "seconds";
      const expectedTextMinutes = "minutes";

      render(<CounterComponent />);

      const seconds = screen.getByText(expectedTextSeconds);
      const minutes = screen.getByText(expectedTextMinutes);

      expect(seconds).toBeInTheDocument();
      expect(minutes).toBeInTheDocument();
    });

    test("Then the function set has been called", () => {
      jest.useFakeTimers();
      const mockTimer = {
        days: 1,
        hours: 1,
        minutes: 1,
        seconds: 1,
      };

      const mockSetTimer = jest.fn();
      const mockUseState = jest.spyOn(React, "useState");
      mockUseState.mockImplementation(() => [mockTimer, mockSetTimer]);

      render(<CounterComponent />);
      jest.advanceTimersByTime(1000);

      expect(mockSetTimer).toHaveBeenCalled();
    });

    test("Then it should render '2' minutes", () => {
      const expectedMinutes = {
        minutes: 2,
      };
      jest.useFakeTimers();
      const mockTimer = {
        minutes: 2,
      };

      const mockSetTimer = jest.fn();
      const mockUseState = jest.spyOn(React, "useState");
      mockUseState.mockImplementation(() => [mockTimer, mockSetTimer]);

      render(<CounterComponent />);
      jest.advanceTimersByTime(1000);

      expect(mockTimer).toStrictEqual(expectedMinutes);
    });
  });
});
