import React from 'react';
import { Description, InfoImage, Box, Loading } from '..';
import { Container } from '../../../../components';
export const LoadingInitial = () => {
  return /*#__PURE__*/ React.createElement(
    Container,
    {
      style: {
        justifyContent: 'center',
      },
    },
    /*#__PURE__*/ React.createElement(
      Box,
      null,
      /*#__PURE__*/ React.createElement(Loading, null),
      /*#__PURE__*/ React.createElement(
        Description,
        null,
        'One second, we are sending your payment...'
      )
    ),
    /*#__PURE__*/ React.createElement(
      Box,
      {
        style: {
          marginTop: 74,
        },
      },
      /*#__PURE__*/ React.createElement(InfoImage, {
        image: require('../../../../assets/one-second.png'),
      })
    )
  );
};
LoadingInitial.Container = Container;
LoadingInitial.Box = Box;
LoadingInitial.Loading = Loading;
LoadingInitial.Description = Description;
LoadingInitial.InfoImage = InfoImage;
//# sourceMappingURL=LoadingInitial.js.map
