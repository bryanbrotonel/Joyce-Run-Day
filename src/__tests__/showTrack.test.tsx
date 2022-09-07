/**
 * @jest-environment jsdom
 */

import React from 'react';
import { expect } from '@jest/globals';
import { act, render } from '@testing-library/react';
import TrackCarousel from '../scenes/Home/EventsSection/TrackCarousel';

test('let users click on track to change track preview', async () => {
  // Mock data
  const races = [
    {
      title: 'Track 1',
      description: 'Track 1 Description',
      image: 'track-1.png',
    },
    {
      title: 'Track 2',
      description: 'Track 2 Description',
      image: 'track-2.png',
    },
    {
      title: 'Track 3',
      description: 'Track 3 Description',
      image: 'track-3.png',
    },
  ];

  const carousel = render(<TrackCarousel races={races} />);

  const currentTrackImage = (await carousel.findByTestId(
    'currentTrackImage'
  )) as HTMLImageElement;

  expect(currentTrackImage.src).toContain(races[0].image);

  for (let i = 0; i < races.length; i++) {
    const image = races[i].image;

    const selector = await carousel.findByTestId(`trackSelect-${i}`);

    act(() => {
      selector.click();
    });

    // Test that the correct image is displayed
    expect(currentTrackImage.src).toContain(image);
  }
});
