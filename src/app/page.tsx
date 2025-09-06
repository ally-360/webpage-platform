import { HeroSection } from '@/components/sections';
import { Box, Skeleton } from '@mui/material';
import dynamic from 'next/dynamic';

// Dynamic imports manteniendo SSR para mejor SEO
const WhatIsAlly360Section = dynamic(() => import('@/components/sections/WhatIsAlly360Section'), {
  loading: () => <SectionSkeleton />
});

const BenefitsSection = dynamic(() => import('@/components/sections/BenefitsSection'), {
  loading: () => <SectionSkeleton />
});

const AICompactSection = dynamic(() => import('@/components/sections/AICompactSection'), {
  loading: () => <SectionSkeleton />
});

const TargetSegmentSection = dynamic(() => import('@/components/sections/TargetSegmentSection'), {
  loading: () => <SectionSkeleton />
});

const ComparisonSection = dynamic(() => import('@/components/sections/ComparisonSection'), {
  loading: () => <SectionSkeleton />
});

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), {
  loading: () => <SectionSkeleton />
});

const PricingSection = dynamic(() => import('@/components/sections/PricingSection'), {
  loading: () => <SectionSkeleton />
});

const CTASection = dynamic(() => import('@/components/sections/CTASection'), {
  loading: () => <SectionSkeleton />
});

// Fallback component para loading
function SectionSkeleton() {
  return (
    <Box sx={{ py: 8 }}>
      <Skeleton 
        variant="rectangular" 
        height={400} 
        sx={{ 
          borderRadius: 2,
          bgcolor: 'grey.100'
        }} 
      />
    </Box>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HeroSection se carga inmediatamente (above the fold) */}
      <HeroSection />
      
      {/* Otras secciones se cargan con dynamic imports */}
      <WhatIsAlly360Section />
      <BenefitsSection />
      <AICompactSection />
      <TargetSegmentSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
