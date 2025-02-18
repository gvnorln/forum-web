import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import * as pdfjs from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Set workerSrc
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const PdfViewer = ({ fileUrl }) => {
  if (!fileUrl) {
    return <div>Error: No file URL provided</div>;
  }

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />;
};

export default PdfViewer;
