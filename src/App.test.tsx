import React from "react"
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import App from "./App";

test("App loads 404 on unknown route", async () => {
  render(<MemoryRouter initialEntries={[`/${Math.random()}`]}><App /></MemoryRouter>)
  const element = screen.getByText(/404/i);
  expect(element).toBeTruthy();
});

test("App loads Dashboard for /", async () => {
  render(<MemoryRouter initialEntries={[`/`]}><App /></MemoryRouter>)
  const element = screen.getByText(/Dashboard/i);
  expect(element).toBeInTheDocument();
});

test("App loads London for /location/London", async () => {
  render(<MemoryRouter initialEntries={[`/location/London`]}><App /></MemoryRouter>)
  const element = screen.getByText(/London/i);
  expect(element).toBeInTheDocument();
  expect(screen.queryAllByText(/Dashboar/i).length).toEqual(0)
});

test("App loads Berlin for /location/Berlin", async () => {
  render(<MemoryRouter initialEntries={[`/location/Berlin`]}><App /></MemoryRouter>)
  const element = screen.getByText(/Berlin/i);
  expect(element).toBeInTheDocument();
  expect(screen.queryAllByText(/Dashboar/i).length).toEqual(0)
});

test("App loads My Location for /location", async () => {
  render(<MemoryRouter initialEntries={[`/location`]}><App /></MemoryRouter>)
  const element = screen.getByText(/My Location/i);
  expect(screen.queryAllByText(/Dashboar/i).length).toEqual(0)
  expect(element).toBeInTheDocument();
});