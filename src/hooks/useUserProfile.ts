'use client';

import { useEffect, useState } from 'react';

type Persona = 'student' | 'developer' | 'designer' | 'other';

export type UserProfile = {
  persona: Persona;
  interests: string[];
  onboarded: boolean;
};

const STORAGE_KEY = 'techneekx_profile_v1';

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile>({
    persona: 'student',
    interests: [],
    onboarded: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProfile(JSON.parse(stored));
      } catch {
        /* ignore */
      }
    }
  }, []);

  const updateProfile = (next: UserProfile) => {
    setProfile(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  return { profile, updateProfile };
}
