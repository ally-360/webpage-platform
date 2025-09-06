'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { FAQS, FAQ_CONTENT, ANIMATIONS } from '../../constants/ia-ally';

const FAQSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="md">
        <motion.div
          variants={ANIMATIONS.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={ANIMATIONS.fadeInUp}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3rem' },
                fontWeight: 700,
                mb: 6,
                color: '#333',
                textAlign: 'center',
              }}
            >
              {FAQ_CONTENT.title}
            </Typography>
          </motion.div>

          {FAQS.map((faq, index) => (
            <motion.div key={index} variants={ANIMATIONS.fadeInUp}>
              <Accordion
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  '&:before': {
                    display: 'none',
                  },
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    px: 3,
                    py: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 176, 240, 0.05)',
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, py: 2, pt: 0 }}>
                  <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQSection;
