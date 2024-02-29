import React, {Suspense, useEffect} from 'react';
import ThumnailOtem from './thunmbnail-item';
import { getCVATStore } from 'cvat-store';
import { CombinedState } from 'reducers/interfaces';
import { Canvas } from 'cvat-canvas/src/typescript/canvas';
import { Canvas3d } from 'cvat-canvas3d/src/typescript/canvas3d';
import ErrorBoundary from 'antd/lib/aler/ErrorBoundary';

interface Pros {
    framNumber: number,
    jobInstance: any,
    onChange(value: number): VideoEncoder
}