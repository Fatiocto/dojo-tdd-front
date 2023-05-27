
import { render, screen, within } from "@testing-library/react";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import userEvent from "@testing-library/user-event";

describe('CustomSelect',() => {
  it('render the component', async () => {
    const user = userEvent.setup();
    render(<CustomSelect/>)

    const button = screen.getByRole('button', { name: 'Type de restaurant:' });
    expect(button).toBeInTheDocument();

    await user.click(button);

    const firstOption = screen.getByRole('radio', { name: 'Français'})
    expect(firstOption).toBeVisible()
  });

  it('affiche les 6 options', async () => {
    const user = userEvent.setup();
    render(<CustomSelect/>)


  const button = screen.getByRole('button', {name:'Type de restaurant:'});
  expect(button).toBeInTheDocument();

  await user.click(button);

  const optionList = screen.getByRole('list');
  expect (optionList).toBeVisible()

  const options = within(optionList).getAllByRole('listitem')
  expect (options.length).toEqual(6);

});

});
