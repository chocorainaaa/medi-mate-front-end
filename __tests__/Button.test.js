import { render, screen, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import UniButton from "../src/Components/Button"


test('button is there', () => {

    //arrange
    const title = "I am a string";
    const mockFn = jest.fn()

    // act
    render(<UniButton title={title} onPress={mockFn} />)

    fireEvent.press(screen.getByText('I am a string'));

    //assert
    expect(mockFn).toBeCalled()
})
