// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { SimpleButton } from "./SimpleButton";

// teting-libraryを使用したテスト
// test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
//   const user = userEvent.setup();
//   render(<SimpleButton />);
//   const simpleButton = screen.getByRole("button");
//   expect(simpleButton).toHaveTextContent("OFF");
//   await user.click(simpleButton);
//   expect(simpleButton).toHaveTextContent("ON");
// });

import { render } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";

// Jestを使用したスナップショットテスト
test("描画されてすぐはOFFと表示されている", () => {
  const view = render(<SimpleButton />);
  expect(view.container).toMatchSnapshot();
});