import { render, screen, fireEvent } from '@testing-library/react-native';

import UniButton from "../src/Components/Button"


test('button is there', () => {

    //arrange
    const title = "I am a string";
    const aLabel = "Tap me!"
    const mockFn = jest.fn()

    // act
    render(<UniButton accessibilityLabel={aLabel} title={title} onPress={mockFn} />)

    fireEvent.press(screen.getByLabelText("Tap me!"));

    //assert
    expect(mockFn).toBeCalled()
})
