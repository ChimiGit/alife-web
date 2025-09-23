import React, { useState } from 'react';
import TeamMemberCard from './TeamMemberCard';
import TeamMemberModal from './TeamMemberModal';
import HeroUIProvider from './HeroUIProvider';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  description?: string;
  location: string;
  image: string;
  category: string;
  slug: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

export default function TeamSection({ title, members }: TeamSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <HeroUIProvider>
      <div className="mb-8 sm:mb-12 md:mb-16">
        <h2
          className="text-4xl sm:text-4xl md:text-4xl lg:text-40px font-medium text-primary mb-4 sm:mb-6 md:mb-8"
          style={{ fontFamily: "'GT Alpina Fine', serif" }}
        >
          {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {members.map(member => (
            <TeamMemberCard
              key={member.slug}
              member={member}
              onClick={handleMemberClick}
            />
          ))}
        </div>
      </div>

      <TeamMemberModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        member={selectedMember}
      />
    </HeroUIProvider>
  );
}
