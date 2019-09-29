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
    expect(window.data.getSpecies([{"species": "Human"}, {"species": "Alien"}], "Human")).toEqual([{"species": "Human"}]);
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

describe("função calcular status", () => {
  it("is a function", () => {
    expect(typeof window.data.percentStatus).toBe("function");
  });

  it("retorna", () => {
    expect(window.data.percentStatus([{"status": "Alive"}, {"status": "Dead"}], [{"status": "Alive"}])).toEqual(50);
  });
});

describe("função calcular especie", () => {
  it("is a function", () => {
    expect(typeof window.data.percentSpecies).toBe("function");
  });

  it("retorna", () => {
    expect(window.data.percentSpecies([{"species": "Human"}, {"species": "Alien"}], [{"species": "Human"}])).toEqual(50);
  });
});