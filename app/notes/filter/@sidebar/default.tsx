import css from './SidebarNotes.module.css'
import {Note} from '@/types/note';
import Link from 'next/link';

const tags:Pick<Note, 'tag'>[] | string[] = ['Todo', "Work", "Personal", "Meeting", "Shopping"]

export default function SideBarNotes() {
    return (<ul className={css.menuList}>
      <li className={css.menuItem} key={"all"}>
        <Link href={"/notes/filter/all"} className={css.menuLink}>
          All notes
        </Link>
      </li>
      {tags.map(tag => (<li className={css.menuItem} key={typeof tag === 'string' ? tag : tag.tag}>
        <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
          {typeof tag === 'string' ? tag : tag.tag}
        </Link>
      </li>))}
    </ul>)
}