import { fireEvent, render, screen } from '@testing-library/react'
import Book from '../Book';
import '@testing-library/jest-dom'

test("Form submit button called with valid data", async () => {
    render(<Book />);
    const handleOnSubmitMock = jest.fn();

    const datePicker = document.getElementById("booking_date") as HTMLElement;
    const button = document.getElementById("btnSubmit") as HTMLElement;
    const form = document.getElementById("booking-form") as HTMLElement;
    form.onsubmit =
        handleOnSubmitMock;

    fireEvent.change(screen.getByPlaceholderText("John"), {
        target: { value: "Max" },
    });
    fireEvent.change(screen.getByPlaceholderText("Doe"), {
        target: { value: "Mustermann" },
    });
    fireEvent.change(screen.getByPlaceholderText("1"), {
        target: { value: 1 },
    });
    fireEvent.change(datePicker, {
        target: { value: new Date("2024-01-01") },
    });

    fireEvent.click(button);
    expect(handleOnSubmitMock).toHaveBeenCalled();
})

test("Form submit button not called, due to empty data", async () => {
    render(<Book />);
    const handleOnSubmitMock = jest.fn();

    const datePicker = document.getElementById("booking_date") as HTMLElement;
    const button = document.getElementById("btnSubmit") as HTMLElement;
    const form = document.getElementById("booking-form") as HTMLElement;
    form.onsubmit =
        handleOnSubmitMock;

    fireEvent.click(button);

    expect(handleOnSubmitMock).not.toHaveBeenCalled();
})
