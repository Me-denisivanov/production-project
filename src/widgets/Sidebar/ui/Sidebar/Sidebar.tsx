import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwither } from 'shared/ui/ThemeSwither';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </div>

            <div className={cls.switchers}>
                <ThemeSwither />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
});
