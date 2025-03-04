"use client"

import Link from "next/link"
import { FC } from "react"
import { NiftySVG } from "../icons/nifty-svg"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="https://www.nifysays.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <NiftySVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} />
      </div>
    </Link>
  )
}
