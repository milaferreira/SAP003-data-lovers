require("../src/data.js");

describe("função filtrar status", () => {
  it("is a function", () => {
    expect(typeof window.data.getStatus).toBe("function");
  });

  it("retorna", () => {
    expect(window.data.getStatus([{"status": "Alive"}, {"status": "Dead"}], "Alive")).toEqual([{"status": "Alive"}]);
  });
});

describe("função filtrar specie", () => {
  it("is a function", () => {
    expect(typeof window.data.getSpecies).toBe("function");
  });

  it("retorna", () => {
    expect(window.data.getSpecies([{"specie": "Human"}, {"specie": "Alien"}], "Human")).toEqual([{"specie": "Human"}]);
  });
});

describe("função filtrar ordenar", () => {
  it("is a function", () => {
    expect(typeof window.data.orderAZ).toBe("function");
  });

  it("retorna", () => {
    expect(window.data.orderAZ([{"name": "Rick Sanchez"}, {"name": "Beth Smith"}], "Beth Smith")).toEqual([{"name": "Beth Smith"}, {"name": "Rick Sanchez"}]);
  });
});

describe("função filtrar desordenar", () => {
  it("is a function", () => {
    expect(typeof window.data.orderZA).toBe("function");
  });

  it("retorna", () => {
    expect(window.data.orderZA([{"name": "Rick Sanchez"}, {"name": "Beth Smith"}], "Rick Sanchez")).toEqual([{"name": "Rick Sanchez"}, {"name": "Beth Smith"}]);
  });
});