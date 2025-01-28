/**
 * 5W Documentation Block for Device Detection Utilities
 * =============================================
 * 
 * WHAT:
 * - A utility module that provides device type detection functionality
 * - Exports functions to determine the current device type (mobile, tablet, web)
 * - Defines breakpoints for responsive design implementation
 * - Provides type-safe device detection through TypeScript types
 * 
 * WHY:
 * - Enables responsive design implementation across the application
 * - Facilitates device-specific layout and component rendering
 * - Ensures consistent device type detection throughout the app
 * - Improves code maintainability with centralized breakpoint management
 * 
 * HOW:
 * - Uses window.innerWidth to determine device type
 * - Implements breakpoints: mobile (<768px), tablet (<1024px), web (≥1024px)
 * - Provides helper functions for specific device checks
 * - Handles server-side rendering by defaulting to 'web'
 * 
 * WHO:
 * - Used by layout components for responsive design
 * - Referenced by components needing device-specific behavior
 * - Maintained by frontend developers
 * 
 * WHEN:
 * - Called during component rendering for responsive layouts
 * - Used during window resize events
 * - Referenced for conditional component rendering
 */

export type DeviceType = 'mobile' | 'tablet' | 'web';

export const getDeviceType = (): DeviceType => {
  if (typeof window === 'undefined') return 'web';

  const width = window.innerWidth;

  if (width < 768) {
    return 'mobile';
  } else if (width < 1024) {
    return 'tablet';
  } else {
    return 'web';
  }
};

export const isMobile = (): boolean => getDeviceType() === 'mobile';
export const isTablet = (): boolean => getDeviceType() === 'tablet';
export const isWeb = (): boolean => getDeviceType() === 'web';