'use client'

import css from './TagsMenu.module.css'
import { useState } from 'react'
import type {Note} from '@/types/note';
import Link from 'next/link';

const tags:Pick<Note, 'tag'>[] | string[] = ['Todo', "Work", "Personal", "Meeting", "Shopping"]

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);


  return (<div className={css.menuContainer}>
  <button className={css.menuButton} onClick={() => setIsOpen(!isOpen)}>
    Notes ▾
  </button>
    {isOpen && <ul className={css.menuList}>
      <li className={css.menuItem} key={"all"}>
        <Link href={"/notes/filter/all"} className={css.menuLink} onClick={() => setIsOpen(false)}>
          All notes
        </Link>
      </li>
      {tags.map(tag => (<li className={css.menuItem} key={typeof tag === 'string' ? tag : tag.tag}>
        <Link href={`/notes/filter/${tag}`} className={css.menuLink} onClick={() => setIsOpen(false)}>
          {typeof tag === 'string' ? tag : tag.tag}
        </Link>
      </li>))}
    </ul>}
</div>
)
}