'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Avatar,
} from '@mui/material';
import {
  Chat as ChatIcon,
  DataUsage as DataIcon,
  Insights as AnalyticsIcon,
  Lightbulb as InsightIcon,
  Security as SecurityIcon,
  Speed as FastIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { AI_CAPABILITIES, CAPABILITIES_CONTENT, ANIMATIONS, GRADIENTS } from '../../constants/ia-ally';

// Mapping de iconos
const iconMap = {
  chat: ChatIcon,
  data: DataIcon,
  analytics: AnalyticsIcon,
  insights: InsightIcon,
  security: SecurityIcon,
  speed: FastIcon,
};

const CapabilitiesSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
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
                mb: 2,
                color: '#333',
                textAlign: 'center',
              }}
            >
              {CAPABILITIES_CONTENT.title}{' '}
              <Box 
                component="span" 
                sx={{ 
                  background: GRADIENTS.text,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {CAPABILITIES_CONTENT.titleHighlight}
              </Box>
              ?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.2rem',
                color: '#666',
                textAlign: 'center',
                mb: 6,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              {CAPABILITIES_CONTENT.subtitle}
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {AI_CAPABILITIES.map((capability, index) => {
              const IconComponent = iconMap[capability.iconKey as keyof typeof iconMap];
              return (
                <Box key={index}>
                  <motion.div variants={ANIMATIONS.fadeInUp}>
                    <Card
                      sx={{
                        height: '100%',
                        p: 4,
                        borderRadius: 3,
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          boxShadow: '0 12px 40px rgba(0, 176, 240, 0.15)',
                          transform: 'translateY(-8px)',
                          borderColor: '#00B0F0',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        <Avatar
                          sx={{
                            background: GRADIENTS.button,
                            width: 60,
                            height: 60,
                            mr: 3,
                            flexShrink: 0,
                          }}
                        >
                          {IconComponent && <IconComponent />}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              mb: 2,
                              color: '#333',
                            }}
                          >
                            {capability.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#666',
                              lineHeight: 1.7,
                              mb: 3,
                            }}
                          >
                            {capability.description}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ ml: 9 }}>
                        {capability.features.map((feature, featureIndex) => (
                          <Box key={featureIndex} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                backgroundColor: '#00B0F0',
                                mr: 2,
                                flexShrink: 0,
                              }}
                            />
                            <Typography variant="body2" sx={{ color: '#555' }}>
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Card>
                  </motion.div>
                </Box>
              );
            })}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CapabilitiesSection;
