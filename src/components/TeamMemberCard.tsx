import React from 'react';

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

interface TeamMemberCardProps {
  member: TeamMember;
  onClick: (member: TeamMember) => void;
}

export default function TeamMemberCard({
  member,
  onClick,
}: TeamMemberCardProps) {
  return (
    <div
      className="text-center sm:text-left cursor-pointer hover:opacity-80 transition-opacity duration-200"
      onClick={() => onClick(member)}
    >
      <div className="w-full max-w-48 mb-3 sm:mb-4 rounded-sm overflow-hidden bg-gray-200 mx-auto sm:mx-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-auto object-cover"
        />
      </div>
      <h4
        className="text-base sm:text-lg font-medium text-primary mb-1"
        style={{ fontFamily: "'GT Alpina Fine', serif" }}
      >
        {member.name}
      </h4>
      <p className="text-xs sm:text-sm text-primary">{member.title}</p>
    </div>
  );
}
