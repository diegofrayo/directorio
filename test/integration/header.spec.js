import React from "react";
import { screen } from "@testing-library/react";

import { fireEvent, render, waitForElement, wait } from "./helpers/setup";
import MainLayout from "~/components/layout/MainLayout";

describe("Main Menu", () => {
  test('"inicio" link points to the correct page', () => {
    render(
      <MainLayout>
        <p>Body</p>
      </MainLayout>,
    );

    screen.debug();

    expect(false).toBe(false);
  });
});
