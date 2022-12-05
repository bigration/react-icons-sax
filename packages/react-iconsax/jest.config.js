"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
exports.default = {
    displayName: 'react-iconsax',
    preset: '../../jest.preset.js',
    transform: {
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
        '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../coverage/packages/react-iconsax',
};
