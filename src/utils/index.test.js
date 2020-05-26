import { getCreatedYear, getCheckBoxData, getFilteredData } from "./";
import {  createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test utility function", () => {
  test("check getCreatedYear function working without error", () => {
    const createdDate = "2017-11-04T18:48:46.250Z";
    const createdYear = new Date(createdDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const yearDiff = currentYear - createdYear;
    expect(getCreatedYear(createdDate)).toBe(yearDiff);
  });

  test("check getFilteredData working without error if target checked with no modelvalue", () => {
    const event = { target: { checked: true, value: "test" } };
    const modelName = "";
    const store = {
        dispatch: {
            addSpeciesFilteredData: jest.fn()
        }
    }
    const output = getFilteredData(event, modelName, store);
    expect(output).not.toBeTruthy();
  });

  test("check getFilteredData working without error if target checked with modelvalue as species", () => {
    const event = { target: { checked: true, value: "test" } };
    const modelName = "species";
    const actions = {
        addSpeciesFilteredData: jest.fn()
      };
      const store = new Vuex.Store({
        actions
      });

    const output = getFilteredData(event, modelName, store);
    expect(output).toBeTruthy();
  });

  test("check getFilteredData working without error if target checked with modelvalue as gender", () => {
    const event = { target: { checked: true, value: "test" } };
    const modelName = "gender";
    const actions = {
        addGenderFilteredData: jest.fn()
      };
      const store = new Vuex.Store({
        actions
      });

    const output = getFilteredData(event, modelName, store);
    expect(output).toBeTruthy();
  });

  test("check getFilteredData working without error if target checked with modelvalue as origin", () => {
    const event = { target: { checked: true, value: "test" } };
    const modelName = "origin";
    const actions = {
        addOriginFilteredData: jest.fn()
      };
      const store = new Vuex.Store({
        actions
      });

    const output = getFilteredData(event, modelName, store);
    expect(output).toBeTruthy();
  });

  test("check getFilteredData working without error if target not checked with modelvalue as empty", () => {
    const event = { target: { checked: false, value: "test" } };
    const modelName = "";
    const actions = {
        addOriginFilteredData: jest.fn()
      };
      const store = new Vuex.Store({
        actions
      });

    const output = getFilteredData(event, modelName, store);
    expect(output).not.toBeTruthy();
  });

  test("check getFilteredData working without error if target not checked with modelvalue as species", () => {
    const event = { target: { checked: false, value: "test" } };
    const modelName = "species";
    const actions = {
        removeSpeciesFilteredData: jest.fn()
      };
      const store = new Vuex.Store({
        actions
      });

    const output = getFilteredData(event, modelName, store);
    expect(output).toBeTruthy();
  });

  test("check getFilteredData working without error if target not checked with modelvalue as gender", () => {
    const event = { target: { checked: false, value: "test" } };
    const modelName = "gender";
    const actions = {
        removeGenderFilteredData: jest.fn()
      };
      const store = new Vuex.Store({
        actions
      });

    const output = getFilteredData(event, modelName, store);
    expect(output).toBeTruthy();
  });

  test("check getFilteredData working without error if target not checked with modelvalue as origin", () => {
    const event = { target: { checked: false, value: "test" } };
    const modelName = "origin";
    const actions = {
        removeOriginFilteredData: jest.fn()
      };
      const store = new Vuex.Store({
        actions
      });

    const output = getFilteredData(event, modelName, store);
    expect(output).toBeTruthy();
  });

  test("check getCheckBoxData working without issue", () => {
    const characters = [
      {
        species: "Human",
      },
      {
        species: "Alien",
      },
      {
        species: "Human",
      },
    ];
    const data = "species";
    const output = getCheckBoxData(characters, data);
    expect(output.length).toBe(2);
  });
});