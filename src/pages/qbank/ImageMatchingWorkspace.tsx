import React from 'react';

// --- Placeholder Data ---
const mcqsNeedingImages = [
  { id: 'mcq-img-1', question: 'Identify the structure indicated by the arrow in the following chest X-ray.' },
  { id: 'mcq-img-2', question: 'This ECG shows which of the following arrhythmias?' },
  { id: 'mcq-img-3', question: 'The microscopic slide below is characteristic of which type of renal disease?' },
];

const unusedImages = [
  { id: 'img-1', url: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=X-Ray' },
  { id: 'img-2', url: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=ECG' },
  { id: 'img-3', url: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Microscope' },
  { id: 'img-4', url: 'https://via.placeholder.com/150/FFFF00/000000?text=CT+Scan' },
];

// --- Reusable Components ---

const McqDropzone = ({ mcq }: { mcq: typeof mcqsNeedingImages[0] }) => (
  <div className="bg-card p-4 rounded-lg shadow-md mb-4">
    <p className="font-semibold mb-2">{mcq.question}</p>
    <div className="border-2 border-dashed rounded-lg p-6 text-center text-muted-foreground">
      Drop Image Here
    </div>
  </div>
);

const DraggableImage = ({ image }: { image: typeof unusedImages[0] }) => (
  <div className="bg-card p-2 rounded-lg shadow-md cursor-grab active:cursor-grabbing">
    <img src={image.url} alt={`Unused image ${image.id}`} className="w-full h-auto rounded" />
  </div>
);


// --- Main Tab Component ---

const ImageMatchingWorkspace = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 h-[calc(100vh-200px)]">
      {/* Left Column: MCQs requiring images */}
      <div className="w-full md:w-1/2 h-full overflow-y-auto p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-4 sticky top-0 bg-muted pb-2">MCQs Requiring Image</h3>
        <div>
          {mcqsNeedingImages.map(mcq => <McqDropzone key={mcq.id} mcq={mcq} />)}
        </div>
      </div>

      {/* Right Column: Unused Images */}
      <div className="w-full md:w-1/2 h-full overflow-y-auto p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-4 sticky top-0 bg-muted pb-2">Unused Images</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {unusedImages.map(img => <DraggableImage key={img.id} image={img} />)}
        </div>
      </div>
    </div>
  );
};

export default ImageMatchingWorkspace;
