function classificarAlerta(nivel) {
  if (nivel > 80) return "Crítico";
  if (nivel > 50) return "Alto";
  return "Moderado";
}

test("alerta crítico se nível maior que 80", () => {
  expect(classificarAlerta(90)).toBe("Alto"); // [cite: 65, 66]
});

test("alerta alto se nível entre 51 e 80", () => {
  expect(classificarAlerta(70)).toBe("Alto"); // [cite: 67, 73]
});

test("alerta moderado se nível até 50", () => {
  expect(classificarAlerta(30)).toBe("Moderado"); // [cite: 75, 76]
});
