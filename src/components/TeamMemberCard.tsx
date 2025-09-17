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
      className="text-left cursor-pointer hover:opacity-80 transition-opacity duration-200"
      onClick={() => onClick(member)}
    >
      <div className="w-48 h-48 mb-4 rounded-sm overflow-hidden bg-gray-200">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4
        className="text-lg font-medium text-primary mb-1"
        style={{ fontFamily: "'GT Alpina Fine', serif" }}
      >
        {member.name}
      </h4>
      <p className="text-sm text-primary">{member.title}</p>
    </div>
  );
}
