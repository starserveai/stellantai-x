/**
 * 5W Documentation Block for Home Page Component
 * =======================================
 * 
 * WHAT:
 * - Root page component that serves as the entry point for the application
 * - Implements automatic device-specific routing logic
 * - Redirects users to appropriate device-specific dashboard views
 * - Uses Next.js client-side navigation capabilities
 * 
 * WHY:
 * - Ensures users are directed to the optimal view for their device
 * - Implements responsive design strategy at the routing level
 * - Provides seamless user experience across different devices
 * - Maintains clean separation between device-specific implementations
 * 
 * HOW:
 * - Uses the deviceDetection utility (/src/utils/deviceDetection.ts) to determine current device type
 * - Implements client-side routing using Next.js useRouter hook
 * - Automatically redirects to device-specific dashboard routes
 * - Handles routing pattern: /{deviceType}/dashboard
 * 
 * WHO:
 * - Entry point for all users accessing the application
 * - Maintained by frontend developers
 * - Integrated with device detection system
 * 
 * WHEN:
 * - Executed on initial application load
 * - Triggered when users access the root URL
 * - Re-evaluated when browser window is resized
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getDeviceType } from '@/utils/deviceDetection';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const deviceType = getDeviceType();
    router.push(`/${deviceType}/dashboard`);
  }, [router]);

  return null;
}