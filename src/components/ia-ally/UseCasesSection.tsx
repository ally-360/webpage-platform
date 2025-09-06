'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Stack,
  Avatar,
  Paper,
} from '@mui/material';
import {
  BusinessCenter as CEOIcon,
  Handshake as SalesIcon,
  Inventory as WarehouseIcon,
  Analytics as AccountantIcon,
  AutoAwesome as SparkleIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { USE_CASES, USE_CASES_CONTENT, ANIMATIONS, GRADIENTS } from '../../constants/ia-ally';

// Mapping de iconos
const iconMap = {
  ceo: CEOIcon,
  sales: SalesIcon,
  warehouse: WarehouseIcon,
  accountant: AccountantIcon,
};

interface UseCasesSectionProps {
  onCTAClick?: () => void;
}

const UseCasesSection: React.FC<UseCasesSectionProps> = ({
  onCTAClick,
}) => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: GRADIENTS.primary,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 15% 15%, rgba(0, 176, 240, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 85% 85%, rgba(0, 76, 151, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(76, 175, 80, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.05) 0%, transparent 50%)
          `,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(45deg, transparent 49%, rgba(0, 176, 240, 0.03) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(0, 76, 151, 0.03) 50%, transparent 51%)
          `,
          backgroundSize: '80px 80px',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={ANIMATIONS.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={ANIMATIONS.fadeInUp}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 3,
                  color: '#fff',
                  textShadow: '0 0 20px rgba(0, 176, 240, 0.3)',
                }}
              >
                {USE_CASES_CONTENT.title}{' '}
                <Box 
                  component="span" 
                  sx={{ 
                    background: GRADIENTS.text,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {USE_CASES_CONTENT.titleHighlight}
                </Box>
                {' '}en tu empresa
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.3rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: 700,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                {USE_CASES_CONTENT.subtitle}
              </Typography>
            </Box>
          </motion.div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: { xs: 3, md: 4 },
            }}
          >
            {USE_CASES.map((useCase, index) => {
              const IconComponent = iconMap[useCase.iconKey as keyof typeof iconMap];
              return (
                <Box key={index}>
                  <motion.div variants={ANIMATIONS.fadeInUp}>
                    <Card
                      sx={{
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 4,
                        border: `1px solid rgba(255, 255, 255, 0.1)`,
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.4s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-12px)',
                          boxShadow: `0 20px 60px ${useCase.color}20`,
                          borderColor: useCase.color,
                          '& .role-icon': {
                            transform: 'scale(1.1) rotate(5deg)',
                            background: useCase.bgGradient,
                          },
                          '& .role-title': {
                            color: useCase.color,
                          },
                          '& .need-card': {
                            borderColor: `${useCase.color}30`,
                            backgroundColor: `${useCase.color}08`,
                          }
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          background: useCase.bgGradient,
                          opacity: 0.7,
                        }
                      }}
                    >
                      <Box sx={{ p: 4, textAlign: 'center' }}>
                        {/* Icon with futuristic design */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                          <Avatar
                            className="role-icon"
                            sx={{
                              width: 80,
                              height: 80,
                              background: 'rgba(255, 255, 255, 0.1)',
                              border: `2px solid ${useCase.color}40`,
                              fontSize: '2.5rem',
                              transition: 'all 0.3s ease-in-out',
                              position: 'relative',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: -2,
                                left: -2,
                                right: -2,
                                bottom: -2,
                                borderRadius: '50%',
                                background: `conic-gradient(from 0deg, ${useCase.color}40, transparent, ${useCase.color}40)`,
                                animation: 'rotate 4s linear infinite',
                                '@keyframes rotate': {
                                  '0%': { transform: 'rotate(0deg)' },
                                  '100%': { transform: 'rotate(360deg)' },
                                },
                              },
                            }}
                          >
                            <Box
                              sx={{
                                color: "#fff",
                                position: 'relative',
                                zIndex: 1,
                                filter: 'drop-shadow(0 0 8px currentColor)',
                              }}
                            >
                              {IconComponent && <IconComponent />}
                            </Box>
                          </Avatar>
                        </Box>
                        
                        {/* Role Title */}
                        <Typography
                          className="role-title"
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            mb: 4,
                            color: '#fff',
                            transition: 'color 0.3s ease-in-out',
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                          }}
                        >
                          {useCase.role}
                        </Typography>
                        
                        {/* Needs Cards */}
                        <Stack spacing={2}>
                          {useCase.needs.map((need, needIndex) => (
                            <Paper
                              key={needIndex}
                              className="need-card"
                              sx={{
                                p: 2.5,
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: 2,
                                transition: 'all 0.3s ease-in-out',
                                position: 'relative',
                                overflow: 'hidden',
                                '&::before': {
                                  content: '""',
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  background: `linear-gradient(45deg, transparent 48%, ${useCase.color}10 50%, transparent 52%)`,
                                  opacity: 0,
                                  transition: 'opacity 0.3s ease',
                                },
                                '&:hover::before': {
                                  opacity: 1,
                                },
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: '#fff',
                                  fontWeight: 500,
                                  fontSize: '0.95rem',
                                  fontStyle: 'italic',
                                  lineHeight: 1.4,
                                  position: 'relative',
                                  zIndex: 1,
                                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                                }}
                              >
                                <Box
                                  component="span"
                                  sx={{
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    fontSize: '1.2rem',
                                    mr: 0.5,
                                  }}
                                >
                                  &ldquo;
                                </Box>
                                {need}
                                <Box
                                  component="span"
                                  sx={{
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    fontSize: '1.2rem',
                                    ml: 0.5,
                                  }}
                                >
                                  &rdquo;
                                </Box>
                              </Typography>
                            </Paper>
                          ))}
                        </Stack>
                        
                        {/* Decorative elements */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            right: -20,
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${useCase.color}20 0%, transparent 70%)`,
                            opacity: 0.3,
                            animation: 'pulse 3s ease-in-out infinite',
                            '@keyframes pulse': {
                              '0%, 100%': { transform: 'scale(1)', opacity: 0.3 },
                              '50%': { transform: 'scale(1.2)', opacity: 0.6 },
                            },
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: -15,
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${useCase.color}15 0%, transparent 70%)`,
                            opacity: 0.4,
                            animation: 'pulse 4s ease-in-out infinite',
                            animationDelay: '1s',
                          }}
                        />
                      </Box>
                    </Card>
                  </motion.div>
                </Box>
              );
            })}
          </Box>

          {/* Bottom CTA for this section */}
          <motion.div variants={ANIMATIONS.fadeInUp}>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 4,
                }}
              >
                {USE_CASES_CONTENT.ctaTitle}
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                startIcon={<SparkleIcon />}
                onClick={onCTAClick}
                sx={{
                  background: GRADIENTS.button,
                  color: '#fff',
                  px: 6,
                  py: 2,
                  fontWeight: 600,
                  borderRadius: 3,
                  fontSize: '1.1rem',
                  boxShadow: '0 8px 25px rgba(0, 176, 240, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 35px rgba(0, 176, 240, 0.4)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                {USE_CASES_CONTENT.ctaButtonText}
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default UseCasesSection;
