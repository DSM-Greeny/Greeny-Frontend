import styled from "styled-components";

interface CategoryItemProps {
  active: boolean;
  category: string;
  onClick: () => void;
}

const CategoryItem = ({ active, category, onClick }: CategoryItemProps) => {
  return (
    <Wrapper className={active ? "active" : undefined} onClick={onClick}>
      {category}
    </Wrapper>
  );
};

export default CategoryItem;

const Wrapper = styled.li`
  padding: 8px;
  padding-top: 4px;
  padding-bottom: 4px;

  width: max-content;
  height: 25px;

  color: ${({ theme }) => theme.colors.background5};
  font-size: ${({ theme }) => theme.fontSizes.description};
  font-weight: 400;

  border: 1px solid ${({ theme }) => theme.colors.background5};
  border-radius: 100px;
  transition: background-color 0.25s ease, color 0.25s ease;
`;
