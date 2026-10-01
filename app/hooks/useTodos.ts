import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { CreateTodo, Todo } from "@/types/todo";

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],

    queryFn: async () => {
      const response = await axios.get<Todo[]>("/api/todos");

      return response.data;
    },
  });
}


export function useDeleteTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`/api/todos/${id}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
}

export function useCreateTodo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: CreateTodo) => {
            const response = await axios.post<Todo>("/api/todos", data);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["todos"],
            });
        }
    })
}


type UpdateTodoInput = {
  id: number;
  completed: boolean;
};

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      completed,
    }: UpdateTodoInput) => {
      const response = await axios.patch<Todo>(
        `/api/todos/${id}`,
        {
          completed,
        }
      );

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
}
