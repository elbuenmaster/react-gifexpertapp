import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("pruebas del hook", () => {
  test("debe retornar el estado inicial", () => {
    // const {data,loading} = useFetchGifs('One punch')
    // crea un componente virtual para probar el hook
    const { result } = renderHook(() => useFetchGifs("One punch"));
    const { data, loading } = result.current;
    console.log(data);
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});
